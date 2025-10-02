const form = document.getElementById("form") as HTMLFormElement;
const short_url = document.getElementById("short_url") as HTMLParagraphElement;

type shortUrl = {
  message: string;
};

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  const input = document.querySelector('input[name="url"]') as HTMLInputElement;
  const url: string = input.value;
  fetch("/short-url", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url,
    }),
  })
    .then((res: Response): Promise<shortUrl> => res.json())
    .then((data) => {
      short_url.textContent = "http://localhost:3000/" + data.message;
      input.value = "";
    });
});
