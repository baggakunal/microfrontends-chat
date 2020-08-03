import './application-header.scss';

export class ApplicationHeaderElement extends HTMLElement {
  public static observedAttributes = ['title'];

  connectedCallback() {
    this.innerHTML = `<span>${this.title}</span>`;
  }
}
customElements.define('application-header', ApplicationHeaderElement);
