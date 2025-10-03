const form = document.getElementById("form") as HTMLFormElement;
const short_url = document.getElementById("short_url") as HTMLParagraphElement;
const clipboard = document.getElementById("icon") as HTMLParagraphElement;

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
      clipboard.classList.remove("hidden");
      short_url.textContent = "http://localhost:3000/" + data.message;
      input.value = "";
    });
});

clipboard.addEventListener("click", (): void => {
  navigator.clipboard.writeText(short_url.innerText);
  clipboard.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
  </svg>
`;
});
