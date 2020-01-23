export class Constants {
    static readonly DATE_FMT = 'dd/MM/yyyy';
    static readonly DATE_TIME_FMT = `${Constants.DATE_FMT} hh:mm`;
    static readonly TOASTR_CONFIG = {
        timeOut: 10000,
        positionClass: 'toast-top-left',
        preventDuplicates: true,
      };
}
