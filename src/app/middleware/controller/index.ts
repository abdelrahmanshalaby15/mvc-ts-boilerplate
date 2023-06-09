export const controller = (service) => async (req, res, next) => {
    const { error, status, message, data } = await service(req);
    if (error) {
        return next({
            message: `Server Error ${error}`,
            status: status
        })
    }
    return res.json({ message, data }).status(status);
}