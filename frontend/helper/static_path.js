import { __staticPath } from "@jx3box/jx3box-common/data/jx3box.json";
import pkg from "../package.json";
const path_map = {
    origin: function () {
        return `${__staticPath["origin"]}${pkg.name}/`;
    },
    github: function () {
        return `${__staticPath["github"]}${pkg.name}/`;
    },
    jsdelivr: function () {
        return `${__staticPath["jsdelivr"]}${pkg.name}@gh-pages/`;
    },
    mirror: function () {
        return `${__staticPath["mirror"]}${pkg.name}/`;
    },
    repo: function () {
        return `/${pkg.name}/`;
    },
    root: function () {
        return "/";
    },
};
export default function (key) {
    return path_map[key]();
}
