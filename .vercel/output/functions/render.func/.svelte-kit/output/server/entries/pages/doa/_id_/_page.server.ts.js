const load = ({ params }) => {
  const response = fetch(`https://doa-doa-api-ahmadramadhan.fly.dev/api/${Number(params.id)}`).then((result) => result.json()).then((data) => data);
  return {
    data: response
  };
};
export {
  load
};
