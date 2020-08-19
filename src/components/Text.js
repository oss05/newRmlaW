import React from 'react';
import '../css/Text.css';

const Text = props => {
    return (
        <div className="text">
            <p style={{fontSize:props.fontSize, color:"#8d8c8c", marginTop:props.paddingTop}}>
                {props.p1} <br /> <br />
                {props.p2} <br style={{display: props.display}}/> <br style={{display: props.display}}/>
                {props.p3} <br style={{display: props.display}}/> <br style={{display: props.display}}/>
                {props.p4} <br  style={{display: props.display}}/> <br  style={{display: props.display}}/>
                {props.p5} <br  style={{display: props.display}}/> <br  style={{display: props.display}}/>
                {props.p6} <br  style={{display: props.display}}/> <br  style={{display: props.display}}/>
                {props.p7} <br  style={{display: props.display}}/> <br  style={{display: props.display}}/>
                {props.p8} <br  style={{display: props.display}}/> <br  style={{display: props.display}}/>
                {props.p9} <br  style={{display: props.display}}/> <br  style={{display: props.display}}/>
                {props.p10} <br  style={{display: props.display}}/> <br  style={{display: props.display}}/>
                {props.p11} <br  style={{display: props.display}}/> <br  style={{display: props.display}}/>
                {props.p12} <br  style={{display: props.display}}/> <br  style={{display: props.display}}/>
                {props.p13} <br  style={{display: props.display}}/> <br  style={{display: props.display}}/>
                {props.p14} <br  style={{display: props.display}}/> <br  style={{display: props.display}}/>
                {props.p15} <br  style={{display: props.display}}/> <br  style={{display: props.display}}/>
                {props.p16} <br  style={{display: props.display}}/> <br  style={{display: props.display}}/>
                {props.p17} <br  style={{display: props.display}}/> <br  style={{display: props.display}}/>
                {props.p18} <br  style={{display: props.display}}/> <br  style={{display: props.display}}/>
                {props.p19} <br  style={{display: props.display}}/> <br  style={{display: props.display}}/>
                {props.p20} <br  style={{display: props.display}}/> <br  style={{display: props.display}}/>
                {props.p21} <br  style={{display: props.display}}/> <br  style={{display: props.display}}/>
                {props.p22} <br  style={{display: props.display}}/> <br  style={{display: props.display}}/>
                {props.p23} <br  style={{display: props.display}}/> <br  style={{display: props.display}}/>
                {props.p24} <br  style={{display: props.display}}/> <br  style={{display: props.display}}/>
                {props.p25} <br  style={{display: props.display}}/> <br  style={{display: props.display}}/>
                {props.p26} <br  style={{display: props.display}}/> <br  style={{display: props.display}}/>
                {props.p27} <br  style={{display: props.display}}/> <br  style={{display: props.display}}/>
                {props.p28} <br  style={{display: props.display}}/> <br  style={{display: props.display}}/>
                {props.p29} <br  style={{display: props.display}}/> <br  style={{display: props.display}}/>
                {props.p30} <br  style={{display: props.display}}/> <br  style={{display: props.display}}/>
            </p>
        </div>
    )
}

export default Text;