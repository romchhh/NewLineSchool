import "./css/HighlightedTextWithDots.css";
export default function HighlightedTextWithDots({children, colorBackground, colorDots}: {children: string; colorBackground: string; colorDots: string}) {
    return <span className='highlightedText-with-dots' style={{backgroundColor: colorBackground, borderColor: colorDots}}>
        {children}
        <div className="highlighted-dot p1" style={{backgroundColor:colorDots}}></div>
        <div className="highlighted-dot p2" style={{backgroundColor:colorDots}}></div>
        <div className="highlighted-dot p3" style={{backgroundColor:colorDots}}></div>
        <div className="highlighted-dot p4" style={{backgroundColor:colorDots}}></div>
    </span>
}