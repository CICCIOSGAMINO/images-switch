import { LitElement, html, css } from 'lit-element'

class ImagesSwitch extends LitElement {

  static get styles() {
    return css`
      :host {
        display: inline-block;

        /* custom var */
        --switch-width: 80px;
        --switch-height: 40px;

      }

      /*  1- Now we need to change the label position as relative , so that we can make 
        use of label::after and style that to appear like a switch.Also set the 
        display : inline-block; so that we can apply width and height for the label. */ 
      label {
        position: relative;
        display: block;
        width: var(--switch-width);
        height: var(--switch-height);
        background-color: #eee;
        border-radius: var(--switch-height);

        cursor: pointer;
        transition: all .3s;
      }

      /* 2 - Add the circle to the toggle switch using ::after pseudo class */ 
      label:after {
        content: "";
        position: absolute;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background-color: white;
        /* to give an effect of circle inside switch */ 
        top: 2px;
        left: 2px;
        transition: all .3s;
      }

      /* 3 - Now we need to change the background color and position of circle when the 
            checkbox is selected, we use :checked property on input. if checked */
      input:checked + label::after {
        /* left: 20px;  or calc width + left */ 
        left: calc(100% - 38px);
      }

      input:checked + label {
        background-color: #7983ff;
      }

      /* 4 - Handling the disabled style */ 
      input[type=checkbox][disabled] + label::before {
        background-color: transparent;
        border-color: #ddd;
      }

      input[type=checkbox][disabled] + label::after {
        /* left: 20px;  or calc width - left * 1/2 */ 
        left: calc(100% - 16px);
      }

      /* 5 - Handling indeterminate */ 
      input[type=checkbox]:indeterminate + label::before {
        background-color: #ddd;
      }

      input[type=checkbox]:indeterminate + label::before {
        /* left: 20px;  or calc width - left * 1/2 */ 
        left: calc(100% - 18px);
      }

      /* TODO handle the hover focus */ 
      input[type=checkbox]:focus + label {
        background-color: red;
      }

      input[type=checkbox]:hover + label {
        background-color: green;
      }

      /* 6 - Let's hide the default checkbox */ 
      input[type=checkbox] {
        display: none;
      }
    `
  }

  connectedCallback() {
    super.connectedCallback()
    // get the focus to host element
    this.tabIndex = 0
  }

  render() {
    return html`
        <input type="checkbox"
          id="switch"
          role="switch"/>
        <label for="switch"></label>
    `
  }

}

customElements.define('images-switch', ImagesSwitch)