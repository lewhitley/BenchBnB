export const fetchBenches = success => {
  $.ajax({
    method: "get",
    url: "/api/benches",
    success,
    error: () => console.log('error')
  });
};
