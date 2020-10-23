const dev = {
    base_url: "http://localhost:3030/api/v1"
};

const staging = {
    base_url: "http://localhost:3030/api/v1"
};

const uat = {
    base_url: "http://localhost:3030/api/v1"
};

const production = {
    base_url: "http://localhost:3030/api/v1"
};

let configVariables = { ...dev };

//Change the config for production and development
switch (process.env.REACT_APP_BUILD_ENV) {
    case "staging":
        configVariables = { ...staging };
        break;
    case "uat":
        configVariables = { ...uat };
        break;
    case "production":
        configVariables = { ...production };
        break;
    default:
        configVariables = { ...dev };
        break;
}

export default {
    ...configVariables
}