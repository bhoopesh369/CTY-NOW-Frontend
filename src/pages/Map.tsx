const Map = () => {
    return (
        <div className="w-full h-full">
            {/* <iframe className="w-full h-full" src={`https://www.google.com/maps/embed?`} allowFullScreen={true} loading="lazy"></iframe> */}
            <iframe
                src="https://maps.openrouteservice.org/#/place/@82.26562500000001,17.84283252904803,6"
                allowFullScreen={true}
                className="w-full h-full"
            ></iframe>
        </div>
    );
};

export default Map;
