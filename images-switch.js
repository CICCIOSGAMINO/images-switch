import { LitElement, html, css } from 'lit-element'

class ImagesSwitch extends LitElement {
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
      value: String
    }
  }

  constructor () {
    super()
    // init
    this.checked = false
    this.disabled = false
    this.value = ''
  }

  static get styles () {
    return css`
      :host {
        display: inline-block;
      }

      /*  1- Now we need to change the label position as relative , so that we can make 
        use of label::after and style that to appear like a switch. */ 
      label {
        position: relative;
        display: block;
        width: var(--switch-width, 80px);
        height: var(--switch-height, 40px);
        background-color: var(--bk-uk-color, transparent);
        border-radius: var(--switch-height, 40px);

        cursor: pointer;
        transition: all .3s;

        background-image: var(--switch-bk-uk-url, none);
        background-size: var(--switch-width, 80px) var(--switch-height, 40px);

        /* out or inner shadow */
        border: var(--border, none);
        box-shadow: var(--shadow, inset 0 0 4px rgba(0, 0, 0, 0.6));
      }

      /* 2 - Add the circle to the toggle switch using ::after pseudo class */ 
      label:after {
        content: "";
        position: absolute;
        width: calc(var(--switch-height, 40px) - (var(--circle-margin, 3px) * 2));
        height: calc(var(--switch-height, 40px) - (var(--circle-margin, 3px) * 2));
        border-radius: 50%;
        background-color: var(--bk-uk-circle-color, transparent);
        background-image: var(--switch-circle-uk-url, none);
        /* background-size: var(calc(--switch-height / 3), 10px) var(calc(--switch-height / 3), 10px);*/
        background-size: calc(var(--switch-height, 40px) - (var(--circle-margin, 3px) * 2)) calc(var(--switch-height, 40px) - (var(--circle-margin, 3px) * 2));
        /* to give an effect of circle inside switch */ 
        top: var(--circle-margin, 3px);
        left: var(--circle-margin, 3px);
        transition: all .3s;

        /* shadow */ 
        box-shadow: var(--shadow-circle, 0 0 0px 2px rgba(0, 0, 0, 0.3));
      }

      /* 3 - Now we need to change the background color and position of circle when the 
            checkbox is selected, we use :checked property on input. if checked */
      input:checked + label::after {
        /* move left */ 
        left: calc(100% - (var(--switch-height, 40px) - var(--circle-margin, 3px)));
        background-color: var(--bk-ck-circle-color, transparent);
      }

      input:checked + label {
        /* fallback color */
        background-color: var(--bk-ck-color, transparent);
        background-image: var(--switch-bk-ck-url, none);
        background-size: var(--switch-width, 80px) var(--switch-height, 40px);
      }

      /* handle the fallback background hover focus (useless with images) */ 
      input[type=checkbox]:focus + label {
        background-color: var(--bk-focus-color, transparent);
      }

      input[type=checkbox]:hover + label {
        /* background-color: var(--bk-hover-color, transparent); */
      }

      /* Handle the circle when :hover or :focus */ 
      input[type=checkbox]:focus + label::after {
        box-shadow: var(--shadow-circle-focus-on, 0 0 5px 6px #FFDE03);
      }

      input[type=checkbox]:hover + label::after {
        box-shadow: var(--shadow-circle-hover-on, 0 0 5px 6px #FFDE03);
      }

      /* 4 - Handling the disabled style */ 
      input[type=checkbox][disabled] + label {
        background-color: var(--bk-disabled-color, transparent);
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
        background-color: var(--bk-disabled-color, transparent);
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
    `
  }

  connectedCallback () {
    super.connectedCallback()
    // set attribute
    this.setAttribute('tabindex', '0')
    this.setAttribute('role', 'switch')
    // connect listeners
    this.addEventListener('keyup', this._handleKeyPress)
  }

  disconnectedCallback () {
    // disconnect listeners
    this.removeEventListener('keyup', this._handleKeyPress)
    super.disconnectedCallback()
  }

  _handleKeyPress (e) {
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

  _handleChange () {
    if (!this.disabled) {
      this.checked = this.shadowRoot.querySelector('#switch').checked
      this._dispatchChange(this.checked)
    }
  }

  _handleToggle () {
    if (!this.disabled) {
      this.checked = !this.checked
      this._dispatchChange(this.checked)
    }
  }

  _dispatchChange (checked) {
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
          .checked="${this.checked}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          @change="${this._handleChange}" />
        <label for="switch"></label>
    `
  }
}

customElements.define('images-switch', ImagesSwitch)
