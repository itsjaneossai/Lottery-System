export interface IApi {
  post(url: string, payload: any): Promise<any>;
  getAll(url: string): Promise<any>;
  getOne(url: string, id: string): Promise<any>;
  update(url: string, id: string, payload: any): Promise<any>;
  delete(url: string, id: string): Promise<any>;
}

export class ApiService implements IApi {
  private baseUrl = "/api";
  
  public async post(url: string, payload: any): Promise<any> {
    const res = await fetch(`${this.baseUrl}/${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error(`Failed POST request: ${res.status}`);
    }

    return await res.json();
  }

  public async postData(url: string, payload: FormData): Promise<any> {
    const res = await fetch(`${this.baseUrl}/${url}`, {
      method: "POST",
      body: payload,
    });

    if (!res.ok) {
      throw new Error(`Failed POST request: ${res.status}`);
    }

    return await res.json();
  }

  public async getAll(url: string): Promise<any> {
    const res = await fetch(`${this.baseUrl}/${url}`);

    if (!res.ok) {
      throw new Error(`Failed GET request: ${res.status}`);
    }

    return await res.json();
  }

  public async getOne(url: string): Promise<any> {
    const res = await fetch(`${this.baseUrl}/${url}`);

    if (!res.ok) {
      throw new Error(`Failed GET (single) request: ${res.status}`);
    }

    return await res.json();
  }

  public async update(url: string, payload: any): Promise<any> {
    const res = await fetch(`${this.baseUrl}/${url}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error(`Failed UPDATE request: ${res.status}`);
    }

    return await res.json();
  }

  public async delete(url: string): Promise<any> {
    const res = await fetch(`${this.baseUrl}/${url}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error(`Failed DELETE request: ${res.status}`);
    }

    return await res.json();
  }
}
