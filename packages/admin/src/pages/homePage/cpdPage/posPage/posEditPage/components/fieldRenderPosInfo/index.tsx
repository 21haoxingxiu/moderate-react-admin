import { Form, FormInstance, Select } from "antd";
import { useEffect } from "react";
import { useFlat } from "src/reduxService";

const onChange = (value: string) => {
	console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
	console.log("search:", value);
};

// Filter `option.label` match the user type `input`
const filterOption = (
	input: string,
	option?: { label: string; value: string },
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

const FieldRenderPosInfo = (props: { formIns: FormInstance }) => {
	const { posCarrierList, getPosCarrierListAct } = useFlat("posStore");
	useEffect(() => {
		if (!posCarrierList.length) {
			getPosCarrierListAct();
		}
	}, []);
	// let map = {
	// 	C: "CITY",
	// 	N: "COUNTRY",
	// 	W: "WORLD",
	// };
	// let locationType =
	// 	map[formIns.getFieldValue("posType") as keyof typeof map];
	// let locationListTemp =
	// 	locationType in locationList ? locationList[locationType] : [];
	// // 根据postype的类型，如果在["I", "T"]中，那么就请求
	// let requestSearchData = ["I", "T"].includes(
	// 	formIns.getFieldValue("posType"),
	// )
	// 	? (posInfoValue) => {
	// 			return this.handleAgencySearch({
	// 				posInfoValue: posInfoValue,
	// 				getFieldValue,
	// 			});
	// 		}
	// 	: "";
	return (
		<Form.Item
			rules={[
				{
					required: true,
					message: (
						<div>
							{`${"posPage.placeholder_input"}  ${"posPage.posInfo"} `}
						</div>
					),
				},
				{
					pattern: /^[A-Za-z0-9]+$/,
					message: <div>{`${"posPage.rule_posInfo_1"}`}</div>,
				},
				{
					max: 9,
					message: <div>{`${"posPage.rule_posInfo_2"}`}</div>,
				},
			]}
			name={"posInfo"}
			style={{
				margin: 0,
			}}
		>
			<Select
				showSearch
				placeholder="Select a person"
				optionFilterProp="children"
				onChange={onChange}
				onSearch={onSearch}
				filterOption={filterOption}
				options={posCarrierList.map((item) => {
					return {
						value: String(item.id),
						label: item.carrier,
					};
				})}
			/>
		</Form.Item>
	);
};

export default FieldRenderPosInfo;
