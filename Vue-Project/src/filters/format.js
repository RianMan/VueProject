import moment from "moment";

export default function(val,style){
    return moment(val).format(style);
}