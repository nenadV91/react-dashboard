class Svg {
  constructor(color) {
    this.color = color || "#75CEF0";
  }

  element() {
    return `
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 40 40" style="enable-background:new 0 0 40 40;" xml:space="preserve">
        <style type="text/css">
          .st0{opacity:0.2;fill:none;stroke:${this.color};stroke-miterlimit:10;}
          .st1{opacity:0.3;fill:url(#XMLID_6_);}
          .st2{opacity:0.4;fill:${this.color};}
          .st3{opacity:0.7;fill:${this.color};}
        </style>
        <circle id="XMLID_4_" class="st0" cx="20" cy="20" r="18.3"/>
        <radialGradient id="XMLID_6_" cx="20" cy="20" r="11.9375" gradientUnits="userSpaceOnUse">
          <stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:0"/>
          <stop  offset="0.1431" style="stop-color:${this.color};stop-opacity:0.1431"/>
          <stop  offset="0.4024" style="stop-color:${this.color};stop-opacity:0.4024"/>
          <stop  offset="0.7456" style="stop-color:${this.color};stop-opacity:0.7456"/>
          <stop  offset="1" style="stop-color:${this.color}"/>
        </radialGradient>
        <circle id="XMLID_3_" class="st1" cx="20" cy="20" r="11.9"/>
        <circle id="XMLID_2_" class="st2" cx="20" cy="20" r="6.5"/>
        <circle id="XMLID_1_" class="st3" cx="20" cy="20" r="2.3"/>
      </svg>
    `
  }

  render() {
    return 'data:image/svg+xml;charset=UTF-8;base64,' + btoa(this.element());
  }
}

export default Svg;