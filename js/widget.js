import { cityServiceSearch } from "./cityServiceSearch.js";
import { startWidget } from "./modules/widgetService.js";

const initWidget = async (app) => {
    const city = 'New York';
    const widget = await startWidget(city);
    app.append(widget);

    cityServiceSearch(widget);

}

const app = document.querySelector('#app');
initWidget(app);

