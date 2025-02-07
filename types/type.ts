

export interface productType{
    _id :string;
    productName : string;
    _type : "product";
    image? :{
        asset :{
            _ref :any;
            _type : "image";
        }
    };
    price : number;
    description? : string;
    slug: {
        _type : "slug";
        current :string;
    },
    inventory : number;
    category : string;
    status : string;

}