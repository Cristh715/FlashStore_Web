import React from "react";
import './CheckBox.css'

const CheckBox = ({text}) =>{
    return(
    <label class="container-check-input">
          <input type="checkbox" />
          <div class="checkmark-compare"></div>
          {text}
    </label>
    );
}

export default CheckBox;