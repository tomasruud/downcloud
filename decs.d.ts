declare module "multi-download" {
    type Options = {
        rename?: (values: { url: string; index: number; urls: string[] }) => string;
    };

    function multiDownload(
        urls: string[],
        options?: Options
    ): Promise<void>

    export default multiDownload;
}
