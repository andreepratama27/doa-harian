export const load = async () => {
  const response = await fetch('https://doa-doa-api-ahmadramadhan.fly.dev/api')
    .then(result => result.json())
    .then(data => data)

  return {
    data: response
  }
};
