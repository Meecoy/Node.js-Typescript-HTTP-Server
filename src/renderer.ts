export async function getProduct(id: number | null) {
  const port: number = 2115;
  const url: string = `http://127.0.0.1:${port}/products`;

  try {
    let response;

    if (id != null) {
      response = await fetch(`${url}?id=${id}`);
    } else {
      response = await fetch(url);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching product data:", error);

    return null;
  }
}

export async function postProduct(product: Object) {
  const port: number = 2115;
  const url: string = `http://127.0.0.1:${port}/products`;

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  }).then((res) => res.json());
}

export async function deleteProduct(id: number) {
  const port: number = 2115;
  const url: string = `http://127.0.0.1:${port}/products?id=${id}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error) {
    console.error("Error deleting product data:", error);
    return null;
  }
}
