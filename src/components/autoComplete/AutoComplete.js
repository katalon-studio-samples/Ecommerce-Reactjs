import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest'
import theme from './auto.module.sass'
import jumpTo from '../../modules/Navigation'

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion}</span>
  );
}

function renderSectionTitle(section) {
  return (
    <strong>{section.title}</strong>
  );
}

function getSectionSuggestions(section) {
  return section.suggestions;
}

export default class AutoComplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      suggestions: []
    };
    
    this.fetchFilterKeys()
  }

  fetchFilterKeys = () => {
    this.props.filter('');
    var searchKeys = this.props.filter_result;
  }

  getSuggestions = (value) => {
    // this.props.filter(value);
    if (this.props.onChange) {
      this.props.onChange(value);
    }
    var searchKeys = this.props.filter_result;
    const escapedValue = escapeRegexCharacters(value.trim());
    
    const regex = new RegExp(escapedValue, 'i');

    return Object.keys(searchKeys ||{})
      .map(section => {
        return {
          title: section.toUpperCase(),
          suggestions: searchKeys[section].filter(key => regex.test(key))
        };
      })
      .filter(filteredResult => filteredResult.suggestions.length > 0);
  }
  
  getSuggestionValue = (suggestion) => {
    return suggestion;
  }


  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    }, () =>{
      if (newValue === '') {
        jumpTo('/dashboard')
      }
      this.props.search(newValue)
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Search...",
      value,
      onChange: this.onChange
    };
    return (
        <Autosuggest 
          theme={theme}
          multiSection={true}
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={renderSuggestion}
          renderSectionTitle={renderSectionTitle}
          getSectionSuggestions={getSectionSuggestions}
          inputProps={inputProps} />
    );
  }
}
