export const token = (state) => state.session.token;

export const loading = (state) => state.session.loading;

export const hasToken = (state) => token(state) != null;

export const authenticated = hasToken;
