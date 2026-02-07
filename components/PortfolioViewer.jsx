'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { pdfjs } from 'react-pdf';
import HTMLFlipBook from 'react-pageflip';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function blobUrl(canvas) {
  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(URL.createObjectURL(blob)), 'image/jpeg', 0.90);
  });
}

export default function PortfolioViewer({ pdfUrl, title }) {
  const [pageImages, setPageImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 400, height: 518 });
  const bookRef = useRef(null);
  const pageInputRef = useRef(null);
  const blobUrls = useRef([]);

  useEffect(() => {
    const update = () => {
      const maxBookWidth = Math.min(960, window.innerWidth - 80);
      const w = Math.min(460, Math.floor(maxBookWidth / 2));
      const h = Math.round(w * (11 / 8.5));
      setDimensions({ width: w, height: h });
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const PAGE_W = 800;

    async function render() {
      try {
        const pdf = await pdfjs.getDocument(pdfUrl).promise;
        const images = [];

        for (let i = 1; i <= pdf.numPages; i++) {
          if (cancelled) return;
          setProgress(Math.round((i / pdf.numPages) * 100));

          const page = await pdf.getPage(i);
          const vp = page.getViewport({ scale: 1 });

          if (i === 1) {
            const scale = PAGE_W / vp.width;
            const rv = page.getViewport({ scale });
            const c = document.createElement('canvas');
            c.width = rv.width;
            c.height = rv.height;
            await page.render({ canvasContext: c.getContext('2d'), viewport: rv }).promise;
            images.push(await blobUrl(c));
          } else {
            const scale = (PAGE_W * 2) / vp.width;
            const rv = page.getViewport({ scale });
            const c = document.createElement('canvas');
            c.width = rv.width;
            c.height = rv.height;
            await page.render({ canvasContext: c.getContext('2d'), viewport: rv }).promise;

            const half = Math.floor(c.width / 2);

            const lc = document.createElement('canvas');
            lc.width = half;
            lc.height = c.height;
            lc.getContext('2d').drawImage(c, 0, 0, half, c.height, 0, 0, half, c.height);
            images.push(await blobUrl(lc));

            const rc = document.createElement('canvas');
            rc.width = c.width - half;
            rc.height = c.height;
            rc.getContext('2d').drawImage(c, half, 0, c.width - half, c.height, 0, 0, c.width - half, c.height);
            images.push(await blobUrl(rc));
          }
        }

        if (!cancelled) {
          blobUrls.current = images;
          setPageImages(images);
          setLoading(false);
        }
      } catch (err) {
        console.error('Error rendering PDF:', err);
      }
    }

    render();
    return () => {
      cancelled = true;
      blobUrls.current.forEach((u) => URL.revokeObjectURL(u));
    };
  }, [pdfUrl]);

  const totalPages = pageImages.length;

  const onFlip = useCallback((e) => {
    if (pageInputRef.current) {
      pageInputRef.current.value = String(e.data + 1);
    }
  }, []);

  const handlePageJump = useCallback(() => {
    if (!bookRef.current || !pageInputRef.current || !totalPages) return;
    const v = parseInt(pageInputRef.current.value, 10);
    if (!isNaN(v)) {
      const p = Math.max(0, Math.min(totalPages - 1, v - 1));
      bookRef.current.pageFlip().flip(p);
    }
  }, [totalPages]);

  const btnStyle = {
    padding: '8px 16px',
    background: 'transparent',
    color: '#8b7355',
    border: '1px solid rgba(205,180,155,0.4)',
    borderRadius: '2px',
    fontSize: '14px',
    fontFamily: 'inherit',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  return (
    <div>
      {/* Controls */}
      <div style={{
        marginBottom: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={() => bookRef.current?.pageFlip().flipPrev()}
            style={btnStyle}
            disabled={loading}
          >←</button>

          <span style={{ fontSize: '14px', color: '#8b7355', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <input
              ref={pageInputRef}
              type="text"
              defaultValue="1"
              onKeyDown={(e) => e.key === 'Enter' && handlePageJump()}
              onBlur={handlePageJump}
              style={{
                width: '40px',
                textAlign: 'center',
                padding: '4px 6px',
                border: '1px solid rgba(205,180,155,0.4)',
                borderRadius: '2px',
                background: 'rgba(255,255,255,0.6)',
                fontSize: '14px',
                fontFamily: 'inherit',
                color: '#3d3028',
                outline: 'none'
              }}
            />
            <span>of {totalPages || '…'}</span>
          </span>

          <button
            onClick={() => bookRef.current?.pageFlip().flipNext()}
            style={btnStyle}
            disabled={loading}
          >→</button>
        </div>

        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#bc8f8f',
            textDecoration: 'none',
            fontSize: '14px',
            padding: '8px 16px',
            border: '1px solid rgba(188,143,143,0.4)',
            borderRadius: '2px',
            transition: 'all 0.3s ease'
          }}
        >
          Download full PDF ↗
        </a>
      </div>

      {/* Book */}
      <div style={{
        borderRadius: '2px',
        background: '#e8e2d8',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '24px',
        minHeight: `${dimensions.height + 48}px`
      }}>
        {loading ? (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            color: '#8b7355',
            fontSize: '14px'
          }}>
            <span>Loading portfolio… {progress}%</span>
            <div style={{
              width: '200px',
              height: '3px',
              background: 'rgba(205,180,155,0.3)',
              borderRadius: '2px',
              overflow: 'hidden'
            }}>
              <div style={{
                width: `${progress}%`,
                height: '100%',
                background: '#bc8f8f',
                transition: 'width 0.3s ease'
              }} />
            </div>
          </div>
        ) : (
          <HTMLFlipBook
            ref={bookRef}
            width={dimensions.width}
            height={dimensions.height}
            size="fixed"
            showCover={true}
            mobileScrollSupport={true}
            onFlip={onFlip}
            flippingTime={800}
            useMouseEvents={true}
            swipeDistance={30}
            drawShadow={true}
            maxShadowOpacity={0.5}
            style={{ boxShadow: '0 8px 32px rgba(61,48,40,0.15)' }}
          >
            {pageImages.map((src, idx) => (
              <div key={idx}>
                <img
                  src={src}
                  alt={`Page ${idx + 1}`}
                  style={{
                    width: dimensions.width,
                    height: dimensions.height,
                    display: 'block'
                  }}
                  draggable={false}
                />
              </div>
            ))}
          </HTMLFlipBook>
        )}
      </div>
    </div>
  );
}
