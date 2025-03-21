import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import flights from "../views/FlightsView.vue";
import BookingsView from "../views/BookingsView.vue";
import StaffsView from "../views/StaffsView.vue";
import HelpDeskView from "../views/HelpDeskView.vue";
import ManageAircrafstsView from "../views/ManageAircrafstsView.vue";
import ReportsAnalyticsView from "../views/ReportsAnalyticsView.vue";
import BroadcastNotificationView from "../views/BroadcastNotificationView.vue";
import PaymentRefundView from "../views/PaymentRefundView.vue";
import AddFlightStep1 from "../components/FlightView/steps/flightStep1.vue";
import AddFlightStep2 from "../components/FlightView/steps/flightStep2.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: HomeView },
    { path: "/flights", name: "flights", component: flights },
    {
      path: "/add-flight/step-1",
      name: "AddFlightStep1",
      component: AddFlightStep1,
    },
    {
      path: "/add-flight/step-2",
      name: "AddFlightStep2",
      component: AddFlightStep2,
    },
    { path: "/bookings", name: "bookings", component: BookingsView },
    { path: "/staffs", name: "staffs", component: StaffsView },
    { path: "/helpdesk", name: "helpdesk", component: HelpDeskView },
    {
      path: "/manage-aircrafts",
      name: "manage-aircrafts",
      component: ManageAircrafstsView,
    },
    {
      path: "/reports-analytics",
      name: "reportsanalytics",
      component: ReportsAnalyticsView,
    },
    {
      path: "/broadcast-notifications",
      name: "BroadcastNotifications",
      component: BroadcastNotificationView,
    },
    {
      path: "/payment-refunds",
      name: "PaymentRefunds",
      component: PaymentRefundView,
    },
  ],
});

export default router;
