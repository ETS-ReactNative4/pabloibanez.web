const responsiveCode = (width) => {
  if (width > 1199) {
    return 'lg';
  }
  if (width > 991) {
    return 'md';
  }
  if (width > 767) {
    return 'sm';
  }
  return 'xs';
}

export default responsiveCode;