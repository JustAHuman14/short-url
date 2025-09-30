document.addEventListener("DOMContentLoaded", (): void => {
  const form = document.getElementById("form") as HTMLFormElement;
  const shortened_url = document.getElementById(
    "short_url"
  ) as HTMLParagraphElement;
  form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    const input = document.querySelector(
      'input[name="url"]'
    ) as HTMLInputElement;
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
      .then((value) => value.json())
      .then(() => {
        input.value = "";
      });
  });
});
