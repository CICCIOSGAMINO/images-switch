<h4 align="center">@cicciosgamino Web Components <b>images-switch</b></h4>

<p align="center">
    <a href="https://github.com/CICCIOSGAMINO/images-switch/commits/master">
    <img src="https://img.shields.io/github/last-commit/CICCIOSGAMINO/images-switch.svg?style=flat-square&logo=github&logoColor=white"
         alt="GitHub last commit">
    <a href="https://github.com/CICCIOSGAMINO/images-switch/issues">
    <img src="https://img.shields.io/github/issues-raw/CICCIOSGAMINO/images-switch.svg?style=flat-square&logo=github&logoColor=white"
         alt="GitHub issues">
    <a href="https://github.com/CICCIOSGAMINO/images-switch/pulls">
    <img src="https://img.shields.io/github/issues-pr-raw/CICCIOSGAMINO/images-switch.svg?style=flat-square&logo=github&logoColor=white"
         alt="GitHub pull requests">
</p>
      
<p align="center">
  <a href="#images-switch">image-switch</a> •
  <a href="#example usage">Example Usage</a> •
  <a href="#install">Install</a> •
  <a href="#images">Images</a> •
  <a href="#css custom properties">CSS Custom Properties</a> •
  <a href="#events">Events</a> •
  <a href="#todo">TODO</a> •
</p>

# images-switch
A simple customizable switch build as web component with LitElement. The main features are the svg background images (unchecked / checked / disabled ) you can use. The svg images are handled as background-image into the CSS component. You can upload your images with new names but remember to change the custom variable into images-switch.js in custom vars section.  

> NOTE: 
     - The web componenst still in beta, so let's open an issue, pull a request or at least add it in 🔧 TODO section of README.md doc !! 

## 🍙 Example Usage

```html
<images-switch></images-switch>
```

## 📦 Install
### 1. via npm
```
npm i images-switch
```
(or)
### 2.via script tag

```html
<script src ="https://unpkg.com/images-switch@1.0.0/lib/index.min.js"></script>
```

# Usage

## Images 
The switch toggle between two background images. Images need to be in svg format with an aspect raction of 2 width and 1 height (rectangle) eg. 100*50 . 

# API

## Attributes
- `checked`

 Add this attribute to set the switch to toggled / checked mode i.e., equivalent to 'checked' attribute of input type 
```html
<images-switch checked></images-switch>
```
  (or)
```javascript
const imgSwitch = document.querySelector('images-switch')
imgSwitch.setAttribute('checked', '')
``` 
- `disabled`

Add this attribute to disable the switch and user can not interact with the switch and cursor will be changed to 'not-allowed'
```html
<images-switch disabled></images-switch>

```
(or)
```javascript
const imgSwitch = document.querySelector('images-switch')
imgSwitch.setAttribute('disabled', '')
```

## CSS Custom Properties
CSS variables allow the styling between component boundaries. Here the list of CSS properties you can use to style the `<images-switch>` component. 

| CSS variables (size)   | Default value | Description 
|-------------------------|---------------|-------------
| `--switch-width`        | `80px`   | switch width (use a 2:1 ratio between width:height) 
| `--switch-height`       | `40px`   | switch heigth (use a 1:2 ratio between heght:width)
| `--circle-margin`       | `3px`    | the margin between the inner switch circle and border.  

| CSS variables (color)   | Default value | Description 
|-------------------------|---------------|-------------
| `--bk-uncheked-color`   | `#455A64` | background color of switch when **unchecked**           
| `--bk-cheked-color`     | `#0336FF` | background color of switch when **checked**           
| `--bk-disabled-color`   | `#999`    | background color of switch when **disabled**           
| `--bk-hover-color`      | `#FF0266` | background color of switch when **hover or focus**           
| `--bk-circle-color`     | `whitesmoke`|  background color of switch central circle    

| CSS variables (shadow)  | Default value | Description 
|-------------------------|---------------|-------------
| `--shadow`              |  `0 0 0px 2px rgba(0, 0, 0, 0.3)`|  shadow of the circle area 
| `--shadow-focus-on`     |  `0 0 5px 6px #FFDE03`           |  shadow of the circle area when focus or hover 
| `--inner-shadow`        | `inset 0 0 4px rgba(0, 0, 0, 0.6)`|  inner shadow of the switch main area 

| CSS variables (images) | Default value | Description 
|------------------------|---------------|-------------
| `--bk-image-unchecked` | `url(unck.svg)`|  background-image for switch background when **unchecked**
| `--bk-image-checked`   | `url(ck.svg)`  |  background-image for switch background when **checked** 
| `--bk-image-disabled`  | `url(dis.svg)` |  background-image for switch background when **disabled** 


```css
body {
     /* custom vars */ 
     --switch-width: 80px;
     ... 
}
```

```javascript
document.documentElement.style.setProperty('--url-bk-image-unchecked', 'url(light.svg)');
```
## Events

- `change`

    - The change event is triggered when `<images-switch>` change the property **checked** either by
       -  clicking on the switch (or)
       -  pressing `space` or `enter` on the keyboard when the switch is focused
    - The value can be accessed from `event.detail.value` as shown in the below example


```javascript
const imgSwitch = document.querySelector('images-switch')
imgSwitch.addEventListener('change',(e) => {
     const status = e.detail.checked
}));
```
or

```html
<images-switch onChange="handleChange()"></images-switch>
```

# Accessibility
Actually acessibility is handled with the `role=switch` and mirrororing the `checked` and `disabled` attributes from the native checkbox input element to the `<images-switch>` web component. 

# 🔧 TODO 
- [ ] Basic Unit testing 
- [ ] Documentation
- [ ] npm publish

# License
[Apache 2.0](https://github.com/CICCIOSGAMINO/images-switch/blob/master/LICENSE) (c)

Made with ❤️ by @cicciosgamino

