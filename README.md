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
A simple customizable switch build as web component with LitElement. The main features are the svg background images (unchecked / checked / disabled ) you can use.  

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

## Images 
The switch toggle between two background images. Images need to be in svg format with an aspect raction of 2 width and 1 height (rectangle) eg. 100*50 . 

## CSS Custom Properties
CSS variables allow the styling between component boundaries. Here the list of CSS properties you can use to style the `<images-switch>` component. 

| CSS variables (size)   | Default value | Description 
|-------------------------|---------------|-------------
| `--switch-width`        | `80px`   | background color of switch when the swito for to rgba, hex values 
| `--switch-height`       | `40px`   | background color of switch when o true. Canssign any color to rgba, hex values 
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
| `--shadow`              |  `0 0 0px 2px rgba(0, 0, 0, 0.3)`|  color of switch Handle when t to rgba, hex values 
| `--shadow-focus-on`     |  `0 0 5px 6px #FFDE03`           |  color of switch Handle when th color to rgba, hex values 
| `--inner-shadow`        | `inset 0 0 4px rgba(0, 0, 0, 0.6)`|  color of switch Handle when then assigr to rgba, hex values

| CSS variables (images) | Default value | Description 
|------------------------|---------------|-------------
| `--bk-image-unchecked` | `url(unck.svg)`|  color of switch Handle when then assign any color to rgba, hex values 
| `--bk-image-checked`   | `url(ck.svg)`  |  color of switch Handle when then assign any color to rgba, hex values 
| `--bk-image-disabled`  | `url(dis.svg)` |  color of switch Handle when then assign any color to rgba, hex values 


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
document.documentElement.addEventListener('toggle',handleToggle(e));
```
or

```html
<jelly-switch onToggle="return handleToggle(e)"></jelly-switch>
```
and value can be obtained as follows

```javascript
function handleToggle(e)
{
    //The value after the user toggles the switch can be accessed from the below code
    console.log('The present value of switch is '+e.detail.value);
    //here e is the event object 
}
```

## 🔧 TODO 

