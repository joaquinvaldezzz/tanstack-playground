import { TextField as TextFieldPrimitive } from "react-aria-components";

import { cx } from "@/lib/primitive";

import type { TextFieldProps } from "react-aria-components";
import { fieldStyles } from "./field";

const TextField = ({ className, ...props }: TextFieldProps) => (
  <TextFieldPrimitive className={cx(fieldStyles(), className)} data-slot="control" {...props} />
);

export { TextField };
