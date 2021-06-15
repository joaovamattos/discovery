import AsyncStorage from "@react-native-async-storage/async-storage";
import CityProps from "../@types/CityProps";

class CityService {
  async store(city: CityProps, rating: number) {
    const storegedData = await AsyncStorage.getItem("@discovery:cities");

    if (storegedData) {
      const cities = JSON.parse(storegedData);
      cities.push({ ...city, rating });
      await AsyncStorage.setItem("@discovery:cities", JSON.stringify(cities));
    } else {
      await AsyncStorage.setItem(
        "@discovery:cities",
        JSON.stringify([{ ...city, rating }])
      );
    }
  }

  async index() {
    const storegedData = await AsyncStorage.getItem("@discovery:cities");

    const cities = storegedData ? JSON.parse(storegedData) : [];

    return cities;
  }

  async delete(city: CityProps) {
    const storegedData = await AsyncStorage.getItem("@discovery:cities");

    if (storegedData) {
      const cities = JSON.parse(storegedData);
      const cityPosition = cities.indexOf(city.id);
      cities.splice(cityPosition, 1);

      await AsyncStorage.setItem("@discovery:cities", JSON.stringify(cities));
    }
  }
}

export { CityService };
