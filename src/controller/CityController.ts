import { CityService } from "../services/CityService";
import CityProps from "../@types/CityProps";

class CityController {
  cityService = new CityService();

  async store(city: CityProps, rating: number) {
    try {
      const newCity = await this.cityService.store(city, rating);

      return newCity;
    } catch {
      return { message: "Something went wrong, please try again" };
    }
  }

  async index() {
    const cities = await this.cityService.index();

    return cities;
  }

  async delete(city: CityProps) {
    await this.cityService.delete(city);
  }
}

export { CityController };
