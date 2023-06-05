import { controller } from "../middleware/controller";

function getProduct() {

}
export default {
    getProduct: controller(getProduct),
}