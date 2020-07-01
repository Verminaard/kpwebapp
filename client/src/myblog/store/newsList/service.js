import ajax from '../../../common/utils/ajax';
import {newsList} from './actions';
import {createLoadAsyncAction, createPageableRequestUrl} from '../../../common/utils/service-utils';

const request = ajax('/my-news');

const errorMessage = 'Произошла ошибка при загрузке списка новостей';

export const requestNewsList = (pageable) =>
   createLoadAsyncAction(newsList, request, {type: 'GET', url: createPageableRequestUrl(pageable, "/")}, errorMessage);

