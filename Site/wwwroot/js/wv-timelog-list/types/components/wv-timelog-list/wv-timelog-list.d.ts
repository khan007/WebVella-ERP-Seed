import '../../stencil.core';
import { Store } from '@stencil/redux';
export declare class WvPostList {
    store: Store;
    records: string;
    currentUser: string;
    isDebug: string;
    relatedRecords: string;
    siteRootUrl: string;
    reloadPostIndex: number;
    componentWillLoad(): void;
    render(): JSX.Element;
}
