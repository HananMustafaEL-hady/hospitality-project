import React from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import { BtnSearch } from "../../../form/button/btn-search";

export const Search = () => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      // location: { lat: () => 30.59382, lng: () => 32.26995 },
      radius: 100 * 1000,
    },
  });
  return (
    <div className="search">
      <Combobox
        onSelect={(addres) => {
          console.log(addres);
        }}
      >
        <ComboboxInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disabled={!ready}
          placeholder="أدخل العنوان "
        />
        <BtnSearch method={() => {}} />
        <ComboboxPopover>
          {status === "OK" &&
            data.map(({ id, description }) => (
              <ComboboxOption key={id} value={description} />
            ))}
        </ComboboxPopover>
      </Combobox>
    </div>
  );
};

// import React, { Component } from "react";
// import ReactGoogleMapLoader from "react-google-maps-loader";
// import ReactGooglePlacesSuggest from "react-google-places-suggest";

// const MY_API_KEY = "AIzaSyDMYv42WF4vGMHUHxV1uKox3yrYnVMO4ME";

// export default class GoogleSuggest extends React.Component {
//   state = {
//     search: "",
//     value: "",
//   };

//   handleInputChange = (e) => {
//     this.setState({ search: e.target.value, value: e.target.value });
//   };

//   handleSelectSuggest = (geocodedPrediction, originalPrediction) => {
//     console.log(geocodedPrediction, originalPrediction); // eslint-disable-line
//     this.setState({
//       search: "",
//       value: geocodedPrediction.formatted_address,
//     });
//   };

//   handleNoResult = () => {
//     console.log("No results for ", this.state.search);
//   };

//   handleStatusUpdate = (status) => {
//     console.log(status);
//   };

//   render() {
//     const { search, value } = this.state;
//     return (
//       <ReactGoogleMapLoader
//         params={{
//           key: MY_API_KEY,
//           libraries: "places,geocode",
//         }}
//         render={(googleMaps) =>
//           googleMaps && (
//             <ReactGooglePlacesSuggest
//               googleMaps={googleMaps}
//               autocompletionRequest={{
//                 input: search,
//                 // Optional options
//                 // https://developers.google.com/maps/documentation/javascript/reference?hl=fr#AutocompletionRequest
//               }}
//               // Optional props
//               onNoResult={this.handleNoResult}
//               onSelectSuggest={this.handleSelectSuggest}
//               onStatusUpdate={this.handleStatusUpdate}
//               textNoResults="My custom no results text" // null or "" if you want to disable the no results item
//               customRender={(prediction) => (
//                 <div className="customWrapper">
//                   {prediction
//                     ? prediction.description
//                     : "My custom no results text"}
//                 </div>
//               )}
//             >
//               <input
//                 type="text"
//                 value={value}
//                 placeholder="Search a location"
//                 onChange={this.handleInputChange}
//               />
//             </ReactGooglePlacesSuggest>
//           )
//         }
//       />
//     );
//   }
// }
