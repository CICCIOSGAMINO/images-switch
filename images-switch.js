import { LitElement, html, css } from 'lit'

class ImagesSwitch extends LitElement {
  static get styles () {
    return css`
      :host {
        display: inline-block;
        position: relative;

        /* All custom vars
        --switch-width: 80px;
        --switch-height: 40px;
        --switch-border: none;
        --switch-border-checked: none;
        --switch-shadow: none;
        --switch-bk-color: #455A64;
        --switch-bk-ck-color: #0336FF;
        --switch-bk-disabled-color: #999;
        --switch-bk-focus-color: #FF0266;
        --switch-bk-hover-color: red;
        --switch-bk-ck-url: url(/images/dark_o.svg);
        --switch-bk-url: url(/images/light_o.svg);
        --switch-bk-disabled-url: url(/images/disabled_o.svg);

        --circle-url: url(/images/moon.svg);
        --circle-ck-url: url();
        --circle-disabled-url: url();

        --circle-margin: 7px;
        --circle-bkcolor: whitesmoke;
        --circle-ck-bkcolor: whitesmoke;
        --circle-shadow: 0 0 0px 2px rgba(0, 0, 0, 0.3);
        --circle-shadow-focus-on: 0 0 5px 6px #FFDE03;
        --circle-shadow-hover-on: 0 0 5px 6px #FFDE03;

        --text-font-family: sans-serif;
        --text-font-size: 2rem;
        --text-font-weight: 300;
        --text-absolute-top: -1.5rem;
        --text-absolute-right: -7rem; */
        
      }

      /*  1- Now we need to change the label position as relative , so that we can make 
        use of label::after and style that to appear like a switch. */ 
      label {
        position: relative;
        display: block;
        width: var(--switch-width, 80px);
        height: var(--switch-height, 40px);
        background-color: var(--switch-bk-color, transparent);
        border-radius: var(--switch-height, 40px);

        cursor: pointer;
        transition: all .3s;

        background-image: var(--switch-bk-url, none);
        background-size: var(--switch-width, 80px) var(--switch-height, 40px);

        /* out or inner shadow */
        border: var(--switch-border, none);
        box-shadow: var(--switch-shadow, none);
      }

      /* 2 - Add the circle to the toggle switch using ::after pseudo class */ 
      label:after {
        content: "";
        position: absolute;
        width: calc(var(--switch-height, 40px) - (var(--circle-margin, 3px) * 2));
        height: calc(var(--switch-height, 40px) - (var(--circle-margin, 3px) * 2));
        border-radius: 50%;
        background-color: var(--circle-bkcolor, transparent);
        background-image: var(--circle-url, none);
        /* background-size: var(calc(--switch-height / 3), 10px) var(calc(--switch-height / 3), 10px);*/
        background-size: calc(var(--switch-height, 40px) - (var(--circle-margin, 3px) * 2)) calc(var(--switch-height, 40px) - (var(--circle-margin, 3px) * 2));
        /* to give an effect of circle inside switch */ 
        top: var(--circle-margin, 3px);
        left: var(--circle-margin, 3px);
        transition: all .3s;

        /* shadow */ 
        box-shadow: var(--circle-shadow, none);
      }

      /* 3 - Now we need to change the background color and position of circle when the 
            checkbox is selected, we use :checked property on input. if checked */
      input:checked + label::after {
        /* move left */ 
        left: calc(100% - (var(--switch-height, 40px) - var(--circle-margin, 3px)));
        background-color: var(--circle-ck-bkcolor, transparent);
      }

      input:checked + label {
        border: var(--switch-border-checked, none);
        /* fallback color */
        background-color: var(--switch-bk-ck-color, transparent);
        background-image: var(--switch-bk-ck-url, none);
        background-size: var(--switch-width, 80px) var(--switch-height, 40px);
      }

      /* handle the fallback background hover focus (useless with images) */ 
      input[type=checkbox]:focus + label {
        background-color: var(--switch-bk-focus-color, transparent);
      }

      input[type=checkbox]:hover + label {
        /* background-color: var(--switch-bk-hover-color, transparent); */
      }

      /* Handle the circle when :hover or :focus */ 
      input[type=checkbox]:focus + label::after {
        box-shadow: var(--circle-shadow-focus-on, none);
      }

      input[type=checkbox]:hover + label::after {
        box-shadow: var(--circle-shadow-hover-on, none);
      }

      /* 4 - Handling the disabled style */ 
      input[type=checkbox][disabled] + label {
        background-color: var(--switch-bk-disabled-color, transparent);
        background-image: var(--switch-bk-disabled-url, none);
        background-size: var(--switch-width, 80px) var(--switch-height, 40px);
        cursor: not-allowed;
      }

      input[type=checkbox][disabled] + label::after {
        /* move left */
        left: calc(100% - (var(--switch-height, 40px) - var(--circle-margin, 3px)));
        cursor: not-allowed;
        box-shadow: none;
      }

      /* 5 - Handling indeterminate */ 
      input[type=checkbox]:indeterminate + label {
        background-color: var(--switch-bk-disabled-color, transparent);
        background-image: none;
      }

      input[type=checkbox]:indeterminate + label::after {
        /* left middle position */ 
        left: calc(100% - (var(--switch-height, 40px) * 1.4));
      }

      /* 6 - Let's hide the default checkbox */ 
      input[type=checkbox] {
        display: none;
      }

      /* 7 - Absolute positioning the text if needed */
      p {
        font-family: var(--text-font-family, sans-serif);
        font-size: var(--text-font-size, 2rem);
        font-weight: var(--text-font-weight, 300);
        position: absolute;
        top: var(--text-absolute-top, -1.5rem);
        right: var(--text-absolute-right, -7rem);
      }
    `
  }

  static get properties () {
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
      value: String,
      trueText: String,
      falseText: String
    }
  }

  constructor () {
    super()
    // init
    this.checked = false
    this.disabled = false
    this.value = ''
    this.trueText = ''
    this.falseText = ''
    this.text = ''
  }

  connectedCallback () {
    super.connectedCallback()
    // set attribute
    this.setAttribute('tabindex', '0')
    this.setAttribute('role', 'switch')
    // connect listeners
    this.addEventListener('keyup', this.#handleKeyPress)
    this.#updateText()
  }

  disconnectedCallback () {
    // disconnect listeners
    this.removeEventListener('keyup', this.#handleKeyPress)
    super.disconnectedCallback()
  }

  #handleKeyPress (e) {
    const KEYCODE = {
      ENTER: 13,
      SPACE: 32,
      TAB: 9
    }

    if (!this.disabled) {
      switch (e.keyCode) {
        case KEYCODE.SPACE:
          this.#handleToggle()
          break
        case KEYCODE.ENTER:
          this.#handleToggle()
          break
      }
    }
  }

  #handleChange () {
    if (!this.disabled) {
      this.checked = this.shadowRoot.querySelector('#switch').checked
      this.#updateText()
      this.#dispatchChange(this.checked)
    }
  }

  #handleToggle () {
    if (!this.disabled) {
      this.checked = !this.checked
      this.#updateText()
      this.#dispatchChange(this.checked)
    }
  }

  #updateText () {
    this.text = this.checked ? this.trueText : this.falseText
  }

  #dispatchChange (checked) {
    const changeEvent = new CustomEvent('change', {
      detail: { checked: checked },
      bubbles: true,
      composed: true
    })

    this.dispatchEvent(changeEvent)
  }

  render () {
    return html`
        <input type="checkbox"
          id="switch"
          role="switch"
          name="label-switch"
          .checked="${this.checked}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          @change="${this.#handleChange}"
          aria-labelledby="label-switch"/>
        <label id="label-switch" for="switch"></label>
        <p id="text">${this.text}</p>
    `
  }
}

customElements.define('images-switch', ImagesSwitch)
