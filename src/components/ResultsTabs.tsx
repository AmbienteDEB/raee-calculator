import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TableExports from "./tables/TableExports";
import TableImports from "./tables/TableImports";
import TableTotal from "./tables/TableTotal";
import { useRaeeCalculatorStore } from "@/hooks/storeRaeeCalculator";

const TabsTriggers = () => {
  const imports = useRaeeCalculatorStore((state) => state.imports);
  const exports = useRaeeCalculatorStore((state) => state.exports);
  return (
    <>
      <TabsTrigger value="imports" disabled={!imports}>
        Importaciones
      </TabsTrigger>
      <TabsTrigger value="export" disabled={!exports}>
        Exportaciones
      </TabsTrigger>
      <TabsTrigger value="net" disabled={!imports || !exports}>
        Ventas
      </TabsTrigger>
    </>
  );
};

export function ResultsTabs() {
  const imports = useRaeeCalculatorStore((state) => state.imports);
  const exports = useRaeeCalculatorStore((state) => state.exports);
  return (
    <Tabs defaultValue="imports">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTriggers />
      </TabsList>
      <TabsContent value="imports">
        <Card>
          <CardHeader>
            <CardTitle>Importaciones</CardTitle>
            <CardDescription>
              Suma de las importaciones agrupadas por categoría detallada por
              año.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 shadow-none">
            <TableImports />
          </CardContent>
          <CardFooter>
            <Button disabled={!imports}>Exportar a Excel</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="export">
        <Card>
          <CardHeader>
            <CardTitle>Exportaciones</CardTitle>
            <CardDescription>
              Suma de las exportaciones agrupadas por categoría detallada por
              año.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <TableExports />
          </CardContent>
          <CardFooter>
            <Button disabled={!exports}>Exportar a excel</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="net">
        <Card>
          <CardHeader>
            <CardTitle>Ventas</CardTitle>
            <CardDescription>
              Es el cálculo de las importaciones menos las exportaciones.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <TableTotal />
          </CardContent>
          <CardFooter>
            <Button disabled={!imports && !exports}>Exportar a Excel</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
