var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function getProduct(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const port = 2115;
        const url = `http://127.0.0.1:${port}/products`;
        try {
            let response;
            if (id != null) {
                response = yield fetch(`${url}?id=${id}`);
            }
            else {
                response = yield fetch(url);
            }
            const data = yield response.json();
            return data;
        }
        catch (error) {
            console.error("Error fetching product data:", error);
            return null;
        }
    });
}
export function postProduct(product) {
    return __awaiter(this, void 0, void 0, function* () {
        const port = 2115;
        const url = `http://127.0.0.1:${port}/products`;
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        }).then((res) => res.json());
    });
}
export function deleteProduct(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const port = 2115;
        const url = `http://127.0.0.1:${port}/products?id=${id}`;
        try {
            const response = yield fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return response;
        }
        catch (error) {
            console.error("Error deleting product data:", error);
            return null;
        }
    });
}
