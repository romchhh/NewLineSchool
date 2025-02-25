import "./css/HighlightedText.css";
export default function HighlightedText({children, colorBackground, colorDots}: {children: string; colorBackground: string; colorDots: string}) {
    return <span className='highlightedText' style={{backgroundColor: colorBackground, borderColor: colorDots}}>
        {children}
        <div className="highlighted-dot p1" style={{backgroundColor:colorDots}}></div>
        <div className="highlighted-dot p2" style={{backgroundColor:colorDots}}></div>
        <div className="highlighted-dot p3" style={{backgroundColor:colorDots}}></div>
        <div className="highlighted-dot p4" style={{backgroundColor:colorDots}}></div>
    </span>
}