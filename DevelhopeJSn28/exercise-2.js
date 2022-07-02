const order = {};

if (order?.customer?.address?.city == undefined) {
  console.log('City is required');
}