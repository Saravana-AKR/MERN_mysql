import React from 'react'
import Select from 'react-select';


const capitalizeFirstLetter = (string) => {
  if (!string) return ''; 
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

const CustomSelect = ({Data,DataValue}) => {

            const uniqueDistricts = Array.from(new Set(Data.map(value => value[DataValue])))
            .map(item => ({ label: capitalizeFirstLetter(item), value: capitalizeFirstLetter(item) }));

        console.log(uniqueDistricts);




        const customFilterOption = (option, searchText,) => {
        if (searchText && option.label) {
        return option.label.toLowerCase().includes(searchText.toLowerCase());
        }
        return uniqueDistricts.indexOf(option.data) < 3;
        };


  return (
    <>
     
     <Select
      options={uniqueDistricts}
      filterOption={customFilterOption}
      placeholder={`Search ${DataValue}...`}
      isClearable
      isSearchable
      className="form-control custom-select"
      name={DataValue}
    />
    
    </>
  )
}

export default CustomSelect