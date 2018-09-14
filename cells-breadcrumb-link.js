class CellsBreadcrumbLink extends Polymer.Element {

  static get is() {
    return 'cells-breadcrumb-link';
  }

  static get properties() {
    return {
      label: {
        type: String,
        value: ""
      },
      buttonLabel: {
        type: String,
        value: ""
      }
    };
  }

  _followBreadcrumb() {
    this.dispatchEvent(new Event('breadcrumb-followed', {composed: true, bubbles: true}));
  }
}

customElements.define(CellsBreadcrumbLink.is, CellsBreadcrumbLink);