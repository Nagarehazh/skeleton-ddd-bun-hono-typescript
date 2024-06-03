import {Container} from "inversify";
import HealthCheckController from "../../controllers/HealthCheckController";
import {TYPES} from "./types.inversify";

const container = new Container();

//Controllers
container.bind<HealthCheckController>(TYPES.HealthCheckController).to(HealthCheckController).inSingletonScope()


//Applications


//Repositories


export default container;