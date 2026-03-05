import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "basic",
        title: "Basic pipes",
        loadComponent: () => import("./pages/basic-page/basic-page"),
    },
    {
        path: "numbers",
        title: "Numbers pipes",
        loadComponent: () => import("./pages/numbers-page/numbers-page"),
    },
    {
        path: "uncommon",
        title: "Uncommon pipes",
        loadComponent: () => import("./pages/uncommon-page/uncommon-page"),
    },
    {
        path: "custom",
        title: "Custom pipes",
        loadComponent: () => import("./pages/custom-page/custom-page"),
    },
    {
        path: "**",
        redirectTo: "basic"
    }
];
