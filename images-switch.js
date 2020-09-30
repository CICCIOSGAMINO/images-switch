import { LitElement, html, css } from 'lit-element'

class ImagesSwitch extends LitElement {

  static get properties() {
    return {
      checked: {
        type: Boolean,
        attribute: true,
        reflect: true
      },
      disabled: {
        type: Boolean,
        attribute: true,
        refelect: true
      },
      value: String
    }
  }

  constructor() {
    super()
    // init
    this.checked = false
    this.disabled = false
    this.value = ''
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;

        /* custom vars */ 
        --switch-width: 80px;
        --switch-height: 40px;

        --circle-margin: 3px;

        --bk-uncheked-color: #455A64;
        --bk-checked-color: #0336FF;
        --bk-disabled-color: #999;
        --bk-hover-color: #FF0266;
        --bk-circle-color: whitesmoke;

        /* box-shadow: [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color]; */
        --shadow: 0 0 0px 2px rgba(0, 0, 0, 0.3);
        --shadow-focus-on: 0 0 5px 6px #FFDE03;
        --inner-shadow: inset 0 0 4px rgba(0, 0, 0, 0.6);

        /* background svg 2:1 images */
        --bk-image-unchecked: url(http://localhost:8888/de.svg);
        --bk-image-checked: url(http://localhost:8888/it.svg);
        --bk-image-disabled: url(http://localhost:8888/forest.svg);
      }

      /*  1- Now we need to change the label position as relative , so that we can make 
        use of label::after and style that to appear like a switch. */ 
      label {
        position: relative;
        display: block;
        width: var(--switch-width);
        height: var(--switch-height);
        background-color: var(--bk-uncheked-color);
        border-radius: var(--switch-height);

        cursor: pointer;
        transition: all .3s;

        background-image: var(--bk-image-unchecked);
        background-size: var(--switch-width) var(--switch-height);

        /* inner shadow */
        box-shadow: var(--inner-shadow);
      }

      /* 2 - Add the circle to the toggle switch using ::after pseudo class */ 
      label:after {
        content: "";
        position: absolute;
        width: calc(var(--switch-height) - (var(--circle-margin) * 2));
        height: calc(var(--switch-height) - (var(--circle-margin) * 2));
        border-radius: 50%;
        background-color: var(--bk-circle-color);
        /* to give an effect of circle inside switch */ 
        top: var(--circle-margin);
        left: var(--circle-margin);
        transition: all .3s;

        /* shadow */ 
        box-shadow: var(--shadow);
      }

      /* 3 - Now we need to change the background color and position of circle when the 
            checkbox is selected, we use :checked property on input. if checked */
      input:checked + label::after {
        /* move left */ 
        left: calc(100% - (var(--switch-height) - var(--circle-margin)));
      }

      input:checked + label {
        /* fallback color */ 
        background-color: var(--bk-checked-color);

        background-image: var(--bk-image-checked);
        background-size: var(--switch-width) var(--switch-height);
      }

      /* handle the fallback background hover focus (useless with images) */ 
      input[type=checkbox]:focus + label {
        background-color: var(--bk-hover-color);
      }

      input[type=checkbox]:hover + label {
        background-color: var(--bk-hover-color);
      }

      /* Handle the circle when :hover or :focus */ 
      input[type=checkbox]:focus + label::after {
        box-shadow: var(--shadow-focus-on);
      }

      input[type=checkbox]:hover + label::after {
        box-shadow: var(--shadow-focus-on);
      }

      /* 4 - Handling the disabled style */ 
      input[type=checkbox][disabled] + label {
        background-color: var(--bk-disabled-color);
        background-image: var(--bk-image-disabled);
        background-size: var(--switch-width) var(--switch-height);
        cursor: not-allowed;
      }

      input[type=checkbox][disabled] + label::after {
        /* move left */
        left: calc(100% - (var(--switch-height) - var(--circle-margin)));
        cursor: not-allowed;
        box-shadow: none;
      }

      /* 5 - Handling indeterminate */ 
      input[type=checkbox]:indeterminate + label {
        background-color: var(--bk-disabled-color);
        background-image: none;
      }

      input[type=checkbox]:indeterminate + label::after {
        /* left middle position */ 
        left: calc(100% - (var(--switch-height) * 1.4));
      }

      /* 6 - Let's hide the default checkbox */ 
      input[type=checkbox] {
        display: none;
      }
    `
  }

  connectedCallback() {
    super.connectedCallback()
    // set attribute
    this.setAttribute('tabindex', '0')
    this.setAttribute('role', 'switch')
    // connect listeners
    this.addEventListener('keyup', this._handleKeyPress)
  }

  disconnectedCallback() {
    // disconnect listeners
    this.removeEventListener('keyup', this._handleKeyPress)
    super.disconnectedCallback()
  }

  _handleKeyPress(e) {

    const KEYCODE = {
      ENTER: 13,
      SPACE: 32,
      TAB: 9
    }

    if (!this.disabled) {
      switch (e.keyCode) {
        case KEYCODE.SPACE:
          this._handleToggle()
          break
        case KEYCODE.ENTER:
          this._handleToggle()
          break
      }
    }
  }

  _handleChange() {
    if (!this.disabled) {
      this.checked = this.shadowRoot.querySelector('#switch').checked
      this._dispatchChange(this.checked)
    }
  }

  _handleToggle() {
    if (!this.disabled) {
      this.checked = !this.checked
      this._dispatchChange(this.checked)
    }
  }

  _dispatchChange(checked) {
    const changeEvent = new CustomEvent('change', {
      detail: { checked: checked },
      bubbles: true,
      composed: true
    })

    this.dispatchEvent(changeEvent)
  }

  render() {
    return html`
        <input type="checkbox"
          id="switch"
          role="switch"
          .checked="${this.checked}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          @change="${this._handleChange}" />
        <label for="switch"></label>
    `
  }
}

customElements.define('images-switch', ImagesSwitch)