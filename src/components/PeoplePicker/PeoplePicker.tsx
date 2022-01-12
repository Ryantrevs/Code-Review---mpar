import * as React from "react";
import { sp } from "@pnp/sp/presets/all";
import {
  IBasePickerSuggestionsProps,
  NormalPeoplePicker,
} from "office-ui-fabric-react/lib/components/pickers";
import { IPersonaProps } from "office-ui-fabric-react";

const suggestionProps: IBasePickerSuggestionsProps = {
  suggestionsHeaderText: "Suggested People",
  mostRecentlyUsedHeaderText: "Suggested Contacts",
  noResultsFoundText: "No results found",
  loadingText: "Loading",
  showRemoveButtons: true,
  suggestionsAvailableAlertText: "People Picker Suggestions available",
  suggestionsContainerAriaLabel: "Suggested contacts",
};

interface IPeoplePickerProps {
  onChange: (items?: IPersonaProps[]) => void;
}

export const PeoplePicker = (props: IPeoplePickerProps) => {
  const onResolveSuggestions = async (
    filterText: string,
    currentPersonas: IPersonaProps[]
  ) => {
    const personas = await sp.searchWithCaching({
      Querytext: `Title: "${filterText}*" OR WorkEmail: "${filterText}*"`,
      SourceId: "b09a7990-05ea-4af9-81ef-edfab16c4e31",
      RowLimit: 100,
    });
    const currentEmails = currentPersonas.map((x) => x.secondaryText);
    let parsedPersonas = personas.PrimarySearchResults.map((persona: any) => {
        console.log(persona);
      return {
        id: persona.ID,
        accountName: persona.AccountName,
        workEmail: persona.WorkEmail,
        secondaryText: persona.WorkEmail,
        text: persona.PreferredName,
        imageUrl: `/_vti_bin/DelveApi.ashx/people/profileimage?size=S&userId=${persona.WorkEmail}`,
        showInitialsUntilImageLoads: true,
      } as IPersonaProps;
    }).filter((x) => !currentEmails.includes(x.secondaryText));
    return parsedPersonas;
  };

  return (
    <div>
      <NormalPeoplePicker
        onResolveSuggestions={onResolveSuggestions}
        onChange={props.onChange}
      />
    </div>
  );
};
