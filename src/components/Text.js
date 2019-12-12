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
                {props.p11}
            </p>
        </div>
    )
}

export default Text;