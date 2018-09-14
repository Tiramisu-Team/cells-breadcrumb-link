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
}

customElements.define(CellsBreadcrumbLink.is, CellsBreadcrumbLink);