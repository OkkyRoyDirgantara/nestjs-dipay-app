import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';


@Injectable()
export class CountriesService {
  create(createCountryDto: CreateCountryDto) {
    return 'This action adds a new country';
  }

  async findAll() {
    try {
      const url = 'https://gist.githubusercontent.com/herysepty/ba286b815417363bfbcc472a5197edd0/raw/aed8ce8f5154208f9fe7f7b04195e05de5f81fda/coutries.json';
      const response = await fetch(url);
        const data = await response.json();
      const filteredData = await data.map(country => {
        return {
          name: country.name,
          region: country.region,
          timezones: country.timezones
        };
      });
        return {
            "status": 200,
            "code": "200",
            "data": filteredData,
            "message": "Success"
        }
    }catch (e) {
      return {
        "status": 400,
        "code": "400",
        "data": null,
        "message": e.message
      }
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} country`;
  }

  update(id: number, updateCountryDto: UpdateCountryDto) {
    return `This action updates a #${id} country`;
  }

  remove(id: number) {
    return `This action removes a #${id} country`;
  }
}
